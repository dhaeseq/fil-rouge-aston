FROM docker.elastic.co/beats/filebeat:7.12.0
ARG env

COPY ./config/${env}/filebeat.yml /usr/share/filebeat/filebeat.yml

USER root
RUN chown root:filebeat /usr/share/filebeat/filebeat.yml

USER filebeat
