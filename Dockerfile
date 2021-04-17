FROM maven:3.8.1-jdk-11-slim AS build
LABEL stage=build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml ./
COPY src ./src
RUN mvn -f pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.10_9-alpine
COPY --from=build /workspace/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
