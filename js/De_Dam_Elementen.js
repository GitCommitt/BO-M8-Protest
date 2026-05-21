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

    const Button = document.createElement("button")
    document.body.appendChild(Button);
}

export function PopupElementen()
{
    const Section = document.createElement("section");
    Section.className = "pop-up_scherm";
    document.body.appendChild(Section);

    const Sub_Heading = document.createElement("h2");
    document.body.appendChild(Section);
}