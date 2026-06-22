<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Black Lives Matter - Protest op de Dam</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="hero-image">
        <div class="hero-text">
            <h1>Black Lives Matter</h1>
            <p>Zwarte Piet - Op de dam</p>
            <button class="play-btn" onclick="openVideoModal()">Bekijk Video</button>
        </div>
    </div>

    <div id="videoModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeVideoModal()">&times;</span>
            <iframe 
                width="100%" 
                height="500" 
                src="img/video.mp4" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    </div>

    <div class="container">
        <section class="info-section">
            <h2>Zwarte Piet</h2>
            <p>
                Zwarte Piet is een traditionele figuur in de Nederlandse sinterklaasviering. In recente jaren is er veel discussie over 
                deze figuur vanwege racistische connotaties. De beweging voor verandering roept op om af te stappen van deze traditie 
                en voor meer inclusiviteit en respect voor alle gemeenschappen.
            </p>
        </section>

        <section class="timeline-section">
            <h2>Protesten op de Dam</h2>
            <p class="timeline-intro">Klik op een jaar om meer te zien over wat er gebeurde</p>
            
            <div class="timeline-container">
                <button class="timeline-button" onclick="toggleYear(2011)">2011</button>
                <button class="timeline-button" onclick="toggleYear(2014)">2014</button>
                <button class="timeline-button" onclick="toggleYear(2020)">2020</button>
                <button class="timeline-button" onclick="toggleYear(2022)">2022-2023</button>
            </div>

            <div class="timeline-content" id="year-2011">
                <h3>2011 - Het Jaar van de Eerste Arrestaties</h3>
                <div class="timeline-detail">
                    <h4>De Situatie op de Dam:</h4>
                    <p>Tijdens de landelijke intocht in Amsterdam lopen een handjevol demonstranten met shirts met de tekst 'Zwarte Piet is Racisme' rustig richting de Dam. De sfeer slaat snel om wanneer ze hardhandig door de politie worden weggedragen en gearresteerd omdat ze geen vergunning hebben.</p>
                    
                    <h4>De Betekenis:</h4>
                    <p>Dit was het absolute startschot van de moderne, zichtbare protestbeweging (met o.a. Jerry Afriyie en Quinsy Gario). Het leidde tot grote verontwaardiging over het politieoptreden.</p>

                    <img class="tijdlijn-img" src="img/2011-photo.jpg" alt="">
                </div>
            </div>

            <div class="timeline-content" id="year-2014">
                <h3>2014 - De Intocht van de 'Witte Pieten'</h3>
                <div class="timeline-detail">
                    <h4>De Situatie op de Dam:</h4>
                    <p>Het protest verschuift naar de officiële intocht op de Dam. De discussie is inmiddels ontploft. De organisatie probeert te sussen door voor het eerst 'Witte Pieten' en 'Rode Pieten' mee te laten lopen, terwijl KOZP-demonstranten op de Dam met spandoeken staan tussen het feestvierende publiek.</p>
                    
                    <h4>De Betekenis:</h4>
                    <p>Dit laat de eerste zichtbare twijfel en verandering in de traditie zien, hoewel de alternatieve Pieten destijds nog veelvuldig werden uitgejouwd.</p>
                    
                    <img class="tijdlijn-img" src="img/2014-photo.jpg" alt="">
                </div>
            </div>

            <div class="timeline-content" id="year-2020">
                <h3>2020 - Het Massale Coronaprotest</h3>
                <div class="timeline-detail">
                    <h4>De Situatie op de Dam:</h4>
                    <p>Midden in een wereldwijde pandemie stromen onverwacht niet honderden, maar ruim 10.000 mensen naar de Dam. Ze staan schouder aan schouder. De aanleiding is een internationale antiracisme-golf, maar de Zwarte Piet-discussie staat centraal op de borden.</p>
                    
                    <h4>De Betekenis:</h4>
                    <p>Het absolute kantelmoment. De schaal was zo gigantisch dat de politiek en grote bedrijven (zoals supermarkten en het Sinterklaasjournaal) diezelfde zomer nog besloten de traditionele Piet te vervangen door de Roetveegpiet.</p>
                    
                    <img class="tijdlijn-img" src="img/2020-photo.jpg" alt="">
                </div>
            </div>

            <div class="timeline-content" id="year-2022">
                <h3>2022-2023 - De Rust na de Storm</h3>
                <div class="timeline-detail">
                    <h4>De Situatie op de Dam:</h4>
                    <p>De intocht trekt over de Dam. Er zijn amper nog protesten of ME-inzetten nodig, omdat de Roetveegpiet in Amsterdam inmiddels volledig de standaard is geworden. Het debat op het plein is nagenoeg verstomd.</p>
                    
                    <h4>De Betekenis:</h4>
                    <p>Dit laat het 'eindpunt' (of de huidige status) van de transformatie op de Dam zien, waarbij de focus van de protesten is verschoven naar kleinere gemeenten buiten de Randstad.</p>
                
                    <img class="tijdlijn-img" src="img/2022-photo.jpg" alt="">

                </div>
            </div>
        </section>

        <section class="timeline-game-section">
            <h2>Zet de Gebeuringen op Juiste Volgorde!</h2>
            <p class="timeline-game-intro">Sleep de kaarten naar de juiste plaats in de tijdlijn</p>
            
            <div class="timeline-game-container">
                <div class="timeline-track" id="timelineTrack">
                    <div class="timeline-slot" data-year="2011">
                        <span class="year-label">2011</span>
                    </div>
                    <div class="timeline-slot" data-year="2014">
                        <span class="year-label">2014</span>
                    </div>
                    <div class="timeline-slot" data-year="2020">
                        <span class="year-label">2020</span>
                    </div>
                    <div class="timeline-slot" data-year="2022">
                        <span class="year-label">2022</span>
                    </div>
                </div>

                <div class="events-pool" id="eventsPool">
                    <div class="event-card" draggable="true" data-year="2020">Massale coronaprotest met 10.000 mensen</div>
                    <div class="event-card" draggable="true" data-year="2014">Eerste Witte en Rode Pieten verschijnen</div>
                    <div class="event-card" draggable="true" data-year="2011">Arrestaties van demonstranten</div>
                    <div class="event-card" draggable="true" data-year="2022">Roetveegpiet is standaard in Amsterdam</div>
                </div>

                <button class="check-btn" onclick="checkTimeline()">Controleer Antwoord</button>
                <button class="reset-btn" onclick="resetTimeline()">Opnieuw</button>
                <div id="timelineResult" class="timeline-result"></div>
            </div>
        </section>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>