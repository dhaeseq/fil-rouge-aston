package fr.bibliotheque.validator;

import fr.bibliotheque.constante.LivreExceptionConstante;
import fr.bibliotheque.dto.LivreDTO;
import fr.bibliotheque.exception.LivreAlreadyExistsException;
import fr.bibliotheque.exception.LivreValidationException;
import fr.bibliotheque.model.Livre;
import fr.bibliotheque.repository.LivreRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

@Slf4j
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LivreValidator {

    private final LivreRepository livreRepository;


    public void validateLivre(LivreDTO livre) throws LivreValidationException {

        log.debug("Validate livre [start]");

        if(livre.getAuteur().isBlank() && livre.getTitre().isBlank()) {
            log.error(LivreExceptionConstante.LIVRE_AUTEUR_AND_TITRE_BLANK);
            throw new LivreValidationException(LivreExceptionConstante.LIVRE_AUTEUR_AND_TITRE_BLANK);
        }

        if(livre.getAuteur().isBlank()) {
            log.error(LivreExceptionConstante.LIVRE_AUTEUR_BLANK);
            throw new LivreValidationException(LivreExceptionConstante.LIVRE_AUTEUR_BLANK);
        }

        if(livre.getTitre().isBlank()) {
            log.error(LivreExceptionConstante.LIVRE_TITRE_BLANK);
            throw new LivreValidationException(LivreExceptionConstante.LIVRE_TITRE_BLANK);
        }

        log.debug("Validate livre [end]");
    }

    public String getFieldOrEmpty(String field) {
        return field.isBlank() ? "" : field;
    }

    public String getReferenceOrGenerate(String reference) {
        return reference.isBlank() ? UUID.randomUUID().toString() : reference;
    }

    public void isLivreExists(LivreDTO dto) throws LivreAlreadyExistsException {

        log.debug("Checking if livre already exists [start]");

        Livre livre = this.livreRepository.findByAuteurAndTitreIgnoreCase(dto.getAuteur(), dto.getTitre());

        if(livre != null) {
            log.error(String.format(LivreExceptionConstante.LIVRE_ALREADY_EXISTS, dto.getAuteur(), dto.getTitre()));
            throw new LivreAlreadyExistsException(String.format(LivreExceptionConstante.LIVRE_ALREADY_EXISTS, dto.getAuteur(), dto.getTitre()));
        }

        log.debug("Checking if livre already exists [end]");
    }
}
