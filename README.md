# citrus-movies
Pikku äppi josta voi selata leffoja, nähdä niiden tietoja ja lukea New York times:n arvostelut elokuvista. 
Käy testaileen äppiä: [Citrus-Movies](https://dqlzp81abxdmc.cloudfront.net)

( Käytetty kahta julkista API:a. [OMDB API](http://www.omdbapi.com/) ja [NYT API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview) )

## Infra
Serverless toteutus jossa CDN jako AWS Cloudfrontin kautta.
Julkisten APIen avaimet tallennettu parameter storeen cryptattyna AWS:n default KMS avaimella.

![citrus-movies-infra](https://user-images.githubusercontent.com/42738047/175360345-1c3208bd-a230-465a-ad3f-bc9c523207fe.jpeg)


## Etusivu
<img width="372" alt="Screen Shot 2022-06-23 at 21 26 03" src="https://user-images.githubusercontent.com/42738047/175369007-0dd2a36a-e459-44ee-87c3-bd92143e32de.png">



## Elokuvan haku
<img width="373" alt="Screen Shot 2022-06-23 at 21 26 52" src="https://user-images.githubusercontent.com/42738047/175369040-42b8bc15-0df1-4b97-89b5-0fef3b320dd0.png">



## Elokuva näkymä
<img width="376" alt="Screen Shot 2022-06-23 at 21 27 03" src="https://user-images.githubusercontent.com/42738047/175369064-63f4c425-c122-442d-8e50-2d0367afb2ec.png">

