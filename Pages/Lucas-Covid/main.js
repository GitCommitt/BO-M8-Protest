document.addEventListener('DOMContentLoaded', function() {
            const infoBtn = document.getElementById('infoBtn');
            const factsDiv = document.getElementById('facts');
            const facts = [
                'Het protest werd gehouden op zondag 3 oktober 2021.',
                'Volgens de organisator van de demonstratie, Michel Reijinga, waren er 50.000 tot 100.000 demonstranten aanwezig.',
                'Veel deelnemers droegen mondkapjes, maar wilden toch protesteren.'
            ];
            infoBtn.addEventListener('click', function() {
                factsDiv.innerHTML = '<div style="display:flex; flex-wrap:nowrap; gap:10px;">' + facts.map(function(fact) {
                    return '<div style="background:#f0f0f0; padding:10px; border-radius:5px; min-width:200px;">' + fact + '</div>';
                }).join('') + '</div>';
            });
        });
