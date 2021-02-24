# floidScrapper

# Contexto

Se desarrolló la aplicación en NodeJS usando el framework express. El deploy se hizo en heroku (puesto que encontré más información, y ando apurado de tiempo).

Basicamente lo que se tiene que hacer es un POST a la siguiente URL:

https://gentle-beach-21793.herokuapp.com/scrapping

con **Headers**:

Content-Type: application/json

con **BODY**:

```
{
    "rut": "19956143-k",
    "password": "somePassword"
}
```

# ACLARACIONES importantes:

A veces el POST indicado anteriormente demora más de 30 segundos, y heroku por defecto manda un error con status 503. Entonces, para que aún puedas ver el balance consultado, simplemente debes ir al siguiente link directamente en el browser:

https://gentle-beach-21793.herokuapp.com

El cual mostrará tu último balance consultado.

# Si tuviera mas tiempo

Si tuviera más tiempo hubierao encontrado la forma de deployarlo en amazon, ya que me tiraba un error de que el elasticBeanstalk no tenía google chrome instalado. Entonces eso sería lo primero.

Luego cuando ya pueda hacer eso, hubiera hecho un frontEnd en React, en el cual se pueda pone el rut y password directamente, y que luego de un tiempo, te indicara el saldo, todo mucho más userFriendly. Usaría Docker compose y elasticBeanstalk para esto.
