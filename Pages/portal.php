<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protest - Beroeps Opdracht</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            min-height: 100vh;
        }

        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect fill="%23333" width="1200" height="400"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="60" fill="white" font-weight="bold">PROTEST DE DAM</text></svg>');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 100px 20px;
            text-align: center;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }

        .hero p {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        .intro-section {
            text-align: center;
            margin-bottom: 60px;
            background-color: white;
            padding: 40px 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .intro-section h2 {
            color: #333;
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .intro-section p {
            color: #666;
            font-size: 1.1rem;
            line-height: 1.7;
            max-width: 800px;
            margin: 0 auto;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .project-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .project-header {
            background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }

        .project-header h3 {
            font-size: 1.6rem;
            margin-bottom: 10px;
        }

        .project-header .emoji {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .project-content {
            padding: 25px;
        }

        .project-content p {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .project-link {
            display: inline-block;
            background-color: #d32f2f;
            color: white;
            padding: 12px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .project-link:hover {
            background-color: #b71c1c;
            transform: scale(1.05);
        }

        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 30px 20px;
            margin-top: 60px;
        }

        .footer p {
            margin: 10px 0;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.2rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .intro-section h2 {
                font-size: 1.5rem;
            }

            .intro-section p {
                font-size: 1rem;
            }

            .project-header h3 {
                font-size: 1.3rem;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .hero {
                padding: 60px 20px;
                min-height: 200px;
            }

            .hero h1 {
                font-size: 1.8rem;
            }

            .hero p {
                font-size: 0.9rem;
            }

            .container {
                padding: 40px 15px;
            }

            .intro-section {
                padding: 25px 20px;
            }

            .intro-section h2 {
                font-size: 1.3rem;
            }

            .intro-section p {
                font-size: 0.95rem;
            }
        }
    </style>
</head>
<body>
    <div class="hero">
    </div>

    <div class="container">
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-header">
                    <h3>Black Lives Matter</h3>
                </div>
                <div class="project-content">
                    <p>De oproep tot gelijkheid en het einde van politiegeweld tegen zwarte mensen. Een wereldwijde beweging voor rassenrechtvaardigheid.</p>
                    <a href="george-floyd/index.php" class="project-link">Bekijk Project</a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-header">
                    <h3>Jongeren Spraak</h3>
                </div>
                <div class="project-content">
                    <p>Jongeren die hun stem verheffen voor maatschappelijke verandering. Een generatie die opkomt voor hun toekomst en hun rechten.</p>
                    <a href="jongeren/index.php" class="project-link">Bekijk Project</a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-header">
                    <h3>Zwarte Piet Protest</h3>
                </div>
                <div class="project-content">
                    <p>Het debat rondom traditie en inclusiviteit. Hoe een Nederlandse traditie veranderde door maatschappelijk protest en bewustwording.</p>
                    <a href="zwarte-piet/index.php" class="project-link">Bekijk Project</a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-header">
                    <h3>COVID-19 Protesten</h3>
                </div>
                <div class="project-content">
                    <p>Protesten tegen maatregelen en voor medische vrijheid. Hoe de pandemie wereldwijd deelname en demonstraties beïnvloedde.</p>
                    <a href="covid/index.php" class="project-link">Bekijk Project</a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-header">
                    <h3>Dam Protesten</h3>
                </div>
                <div class="project-content">
                    <p>Demonstraties op het Damplein in Amsterdam. Een historisch plein waar politieke verandering wordt geeist en bevochten.</p>
                    <a href="protest-dam/index.php" class="project-link">Bekijk Project</a>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2026 - Beroeps Opdracht Periode 8</p>
        <p>Thema: Black Lives Matter</p>
    </div>
</body>
</html>