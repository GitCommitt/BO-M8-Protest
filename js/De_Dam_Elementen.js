import './all.min.js'

/* De rede waarom ik dit maak is om elementen
 in te laden en de ander weer uit te laden. */

export function DamElementen()
{
    const Section = document.createElement("section");
    Section.className = "De_Dam_Scherm";
    document.body.appendChild(Section);
    
    const Heading = document.createElement("h1");
    Heading.className = "heading";
    Heading.innerText = "klik de blauwe knop om te starten";
    Section.appendChild(Heading);

    const Image = document.createElement("img");
    Image.className = "De_Dam_image";
    Image.src = "./image/Protest_De_Dam.jpg";
    Image.alt = "ProButton op de dam";
    Section.appendChild(Image);

    const Eerste_Audio_Button = document.createElement("button")
    Eerste_Audio_Button.className = "eerste_audio_button";
    Section.appendChild(Eerste_Audio_Button);

    Eerste_Audio_Button.onclick = function()
    {
        Eerste_Audio_Button.style.backgroundColor = "green";

        const Audio_Balk = document.createElement("div");
        Audio_Balk.className = "div__Audio_Balk";
        Section.appendChild(Audio_Balk);
        Audio_Balk.style.visibility = "none";

        const Eerste_icon_Audio_Button = document.createElement("button");
        Eerste_icon_Audio_Button.className = "button__Audio_button";
        Audio_Balk.appendChild(Eerste_icon_Audio_Button);

        const Eerste_icon = document.createElement("i");
        Eerste_icon.className = "fa-solid fa-volume";
        Eerste_icon_Audio_Button.appendChild(Eerste_icon);
    }
}

export function PopupElementen()
{
    const Pop_up_Section = document.createElement("section");
    Pop_up_Section.className = "pop-up_scherm";
    document.body.appendChild(Pop_up_Section);
    
    const Sub_Heading = document.createElement("h2");
    Pop_up_Section.appendChild(Sub_Heading);

    const Image = document.createElement("img");
    Image.className = "Pop-up_image";
    Image.src = "./image/Draai_jouw_smartphone.gif";
    Image.alt = "Draai jouw smartphone";
    Pop_up_Section.appendChild(Image);

    const Oke_Button = document.createElement("button");
    Oke_Button.className = "oke_button";
    Oke_Button.innerText = "Oké";
    Pop_up_Section.appendChild(Oke_Button);

    Oke_Button.onclick = function()
    {
        Pop_up_Section.style.visibility = "hidden";
        Pop_up_Section.style.display = "none";
        DamElementen();
    }
}