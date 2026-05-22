/* De rede waarom ik dit maak is om elementen
 in te laden en de ander weer uit te laden. */

export function DamElementen()
{
    const Heading = document.createElement("h1");
    Heading.className = "heading";
    Heading.innerText = "klik de knop om te starten";
    document.body.appendChild(Heading);

    const Image = document.createElement("img");
    Image.className = "image";
    Image.src = "../image/Protest_De_Dam.jpg";
    Image.alt = "ProButton op de dam";
    document.body.appendChild(Image);

    const Eerste_Audio_Button = document.createElement("button")
    Eerste_Audio_Button.className = "eerste_audio_button";
    document.body.appendChild(Eerste_Audio_Button);
}

export function PopupElementen()
{
    const Section = document.createElement("section");
    Section.className = "pop-up_scherm";
    document.body.appendChild(Section);

    const Sub_Heading = document.createElement("h2");
    Section.appendChild(Sub_Heading);

    const Oke_Button = document.createElement("button");
    Oke_Button.className = "oke_button";
    Oke_Button.innerText = "Oké";
    Oke_Button.onclick = function(){ "../De_Dam.html" };
    document.body.appendChild(Oke_Button);
}