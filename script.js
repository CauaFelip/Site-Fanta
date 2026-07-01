//Criacao de uma timeline do GSAP com animacoes sincronizadas com o scroll
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        //so comeca quando a classe two comeca a aparecer
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,//Acao sincroniza com o scroll
        markers: false, //DEPURACAO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID FANTA PARA 160% DO TOPO
        left: '23%', // MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width: '15%',//REDUZ A LARGURA DO ELEMENTO COM ID 'ORANGE' PARA 15%
        top: '166%', //MOVE O ELEMENTO COM ID FANTA PARA 160% DO TOPO
        right: '10%',//MOVE O OBJETO 10% DA DIREITA
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FANTA PARA 110% DO TOPO
        rotate: '1030deg', // ROTACIONA O ELEMENTO EM 1030 GRAUS
        left: '70%', //MOVE O OBJETO 70% DA ESQUERDA
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FANTA PARA 200% DO TOPO
        rotate: '1030deg', // ROTACIONA O ELEMENTO EM 1030 GRAUS
        left: '0%', //MOVE O OBJETO 0% DA ESQUERDA
    },
    'orange'
);

//CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        //so comeca quando a classe two comeca a aparecer
        start: '0% 95%',
        end: '20% 50%', //FIM DA ANIMACAO(TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SECAO .THREE)
        scrub: true,//Acao sincroniza com o scroll
        markers: false, //DEPURACAO
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
        
    },
    'ca'
);

tl2.from(
    '.lemon2', //CHAMA PONTO PQ E CLASSE
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi', //CHAMA # PQ E ID
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada', //CHAMA # PQ E ID
    {
        width: '18%',
        left: '41%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta', //CHAMA # PQ E ID
    {
        width: '30%',
        left: '35%',
        top: '220%',
    },
    'ca'
);

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.four',
        //so comeca quando a classe two comeca a aparecer
        start: '20% 95%',
        end: '50% 70%', //FIM DA ANIMACAO(TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SECAO .THREE)
        scrub: true,//Acao sincroniza com o scroll
        markers: false, //DEPURACAO
    },
});

tl3.to(
    '#cocacola',
    {
        
        top: "155%",
        left: "10%",
        rotate: '-720deg',
        
    },
    'cai'
);

tl3.to(
    '#pepsi',
    {
        top: "155%",
        left: "35%",
        rotate: '-720deg',
    },
    'cai'
);

tl3.to(
    '#fanta',
        {
            top: "332%",
            left: "28%",
            rotate: '-720deg',
        },
        'cai'
);

tl3.to(
    '#laranja-cortada',
        {
            top: "360%",
            left: "15%",
            rotate: '740deg',
            width: "17%",
        },
        'cai'
);

tl3.to(
    '#folha',
    {
        top:"306%",
        width: '15%',
        rotate: "-320deg",
        left: "65%",
    
    },
);

tl3.to(
    "#folha2",
    {
        left: "21%",
        top: "305%",
        rotate: "440deg",
        width: "10%",
    },
);