# citrus-movies
Pikku äppi josta voi selata leffoja, nähdä niiden tietoja ja lukea New York times:n arvostelut elokuvista. 
( Käytetty kahta julkista API:a. [OMDB API](http://www.omdbapi.com/) ja [NYT API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview) )

## Infra
Serverless toteutus jossa CDN jako AWS Cloudfrontin kautta.
Julkisten APIen avaimet tallennettu parameter storeen cryptattyna AWS:n default KMS avaimella.

![citrus-movies-infra](https://user-images.githubusercontent.com/42738047/175360345-1c3208bd-a230-465a-ad3f-bc9c523207fe.jpeg)


## Etusivu
<img width="377" alt="Screen Shot 2022-06-23 at 20 28 49" src="https://user-images.githubusercontent.com/42738047/175360927-f173bbab-4377-4bad-9868-dc0e1b7bf73b.png">


## Elokuvan haku
<img width="375" alt="Screen Shot 2022-06-23 at 20 29 07" src="https://user-images.githubusercontent.com/42738047/175360958-8bc087a7-6d0b-41bf-a3e2-625802a6d5ae.png">


## Elokuva näkymä
<img width="376" alt="Screen Shot 2022-06-23 at 20 29 33" src="https://user-images.githubusercontent.com/42738047/175360992-e61431e0-6c32-4c37-a6a3-0fac3782e446.png">
