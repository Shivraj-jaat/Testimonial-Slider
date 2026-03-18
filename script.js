const testimonial = [
    {
        photourl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxKdtGpVONwPdTVQb93KT2voG2FX1WX9d9A&s",
        para: "A cozy retreat blending modern design with warm hospitality. Blue gradients, soft lighting, and interactive menus create a welcoming atmosphere where every sip, bite, and moment feels refreshingly unforgettable.",
        name: "Cutie Pie",
    },
    {
        photourl: "https://www.shutterstock.com/image-vector/panda-teddy-bear-bamboo-illustration-600nw-2409126125.jpg",
        para: "Gentle giant of bamboo forests, the panda bear charms with playful spirit, striking black‑and‑white coat, calm demeanor, and enduring symbol of peace, conservation, and natural wonder worldwide.",
        name: "Panda Bear",
    },
    {
        photourl: "https://m.media-amazon.com/images/I/71dX9JnTkwL._AC_UF894,1000_QL80_.jpg",
        para: "Quick, agile, and endlessly curious, the squirrel scampers through trees with bushy tail flicking, gathering nuts, leaping gracefully, and embodying playful energy, adaptability, and woodland charm in every movement.",
        name: "Squirrel",
    },
]


let i = 0;

testimonials();

function testimonials() {
    const { photourl, para, name } = testimonial[i];

    const img = document.querySelector("img");
    const para1 = document.querySelector(".para");
    const name1 = document.querySelector(".head");

    img.src = photourl;
    para1.innerText = para;
    name1.innerText = name;

    i++;

    if (i === testimonial.length) {
        i = 0;
    }

    setTimeout(() => {
        testimonials();
    }, 2000);

}