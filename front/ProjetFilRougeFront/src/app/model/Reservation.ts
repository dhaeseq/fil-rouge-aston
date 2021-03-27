import {Livre} from "./Livre";
import {Client} from "./Client";

export class Reservation {
  livre: Livre;
  client: Client;
  idReservation: number;
  dateReservation: Date;
  dateRetrait: Date;
}
