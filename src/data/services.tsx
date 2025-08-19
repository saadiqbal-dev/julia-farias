type ServiceItem = {
  imgSrc: string;
  title: string;
  subTitle: string;
  supportingText?: React.ReactNode;
};

export const services: ServiceItem[] = [
  {
    imgSrc: "/images/services/service-1.webp",
    title: "Facetas em Resina",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        <p>
          Imagine um trabalho artístico, onde o dentista esculpe, camada por
          camada, uma nova superfície para o seu dente. Isso é a faceta em
          resina.
        </p>
        <p>
          Utilizando uma resina composta — um material moderno que imita
          perfeitamente as cores, texturas e o brilho de um dente natural —, o
          profissional modela diretamente sobre o dente original para corrigir
          imperfeições. É uma técnica que une ciência e arte para criar um
          resultado harmônico e personalizado, geralmente com mínimo ou nenhum
          desgaste do dente.
        </p>
        <p>
          As facetas em resina são uma excelente opção para corrigir diversas
          queixas estéticas e o tratamento oferece vantagens importantes,
          focadas tanto na estética quanto na saúde do seu sorriso. Ficou com
          alguma dúvida? Estamos à disposição para conversar e esclarecer todos
          os pontos, sem compromisso.
        </p>
      </>
    ),
  },
  {
    imgSrc: "/images/services/service-2.webp",
    title: "Alinhadores",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        Os alinhadores, popularmente conhecidos como "aparelhos invisíveis", são
        a mais moderna evolução no tratamento para corrigir a posição dos
        dentes.
        <br style={{ marginBottom: "8px" }} />
        Eles são um conjunto de placas transparentes e removíveis, feitas sob
        medida para a sua boca a partir de um escaneamento digital 3D. Cada
        placa (ou alinhador) é ligeiramente diferente da anterior e aplica uma
        força suave e constante nos dentes, movendo-os gradualmente para a
        posição correta. A troca dos alinhadores é feita a cada uma ou duas
        semanas, seguindo a sequência planejada pelo ortodontista, até que o
        resultado desejado seja alcançado.
        <br style={{ marginBottom: "8px" }} />
        Ficou com alguma dúvida? Estamos à disposição para conversar e
        esclarecer todos os pontos, sem compromisso.
      </>
    ),
  },
  {
    imgSrc: "/images/services/service-3.webp",
    title: "Lentes de Porcelana",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        São finíssimas lâminas de cerâmica, desenhadas digitalmente e produzidas
        em um laboratório especializado. Cada peça é fixada de forma permanente
        sobre os dentes para criar uma transformação de altíssima precisão e
        naturalidade.
        <br style={{ marginBottom: "8px" }} />
        É a escolha ideal para quem busca o mais alto padrão estético. Perfeitas
        para corrigir alterações severas de cor, dentes desgastados ou para
        criar um sorriso totalmente novo, com uma cor que não muda com o tempo e
        uma durabilidade incomparável.
        <br style={{ marginBottom: "8px" }} />
        Ficou com alguma dúvida? Estamos à disposição para conversar e
        esclarecer todos os pontos, sem compromisso.
      </>
    ),
  },
  {
    imgSrc: "/images/services/service-4.webp",
    title: "Clareamento Dental",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        É um procedimento seguro que utiliza um gel clareador para remover as
        partículas e pigmentos que deixam os dentes amarelados. Realizado sempre
        com a supervisão de um dentista, ele pode ser feito no consultório, em
        casa com moldeiras, ou combinando as duas técnicas.
        <br style={{ marginBottom: "8px" }} />É a maneira mais simples e
        conservadora de recuperar a cor original do seu sorriso, ideal para quem
        se incomoda com manchas de café, chás e outros alimentos. O resultado é
        um sorriso visivelmente mais claro, iluminado e que renova a
        autoconfiança.
        <br style={{ marginBottom: "8px" }} />
        Ficou com alguma dúvida? Estamos à disposição para conversar, sem
        compromisso.
      </>
    ),
  },
  {
    imgSrc: "/images/services/service-5.webp",
    title: "Implantes Dentários",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        É a forma mais moderna e segura de substituir um ou mais dentes
        perdidos. Um pequeno pino de titânio, material biocompatível, é
        integrado ao osso para funcionar como uma nova raiz. Sobre ele, é
        instalado um dente de porcelana, com aparência e função idênticas às de
        um dente natural.
        <br style={{ marginBottom: "8px" }} />
        É a solução definitiva para recuperar a segurança na mastigação, a
        confiança para sorrir e falar, e a harmonia estética do sorriso. O
        tratamento devolve sua qualidade de vida e preserva a saúde bucal a
        longo prazo.
        <br style={{ marginBottom: "8px" }} />
        Ficou com alguma dúvida? Estamos à disposição para conversar e
        esclarecer todos os pontos, sem compromisso.
      </>
    ),
  },
  {
    imgSrc: "/images/services/service-6.webp",
    title: "Prótese Protocolo",
    subTitle: "Saiba mais",
    supportingText: (
      <>
        É a reabilitação completa do sorriso. Uma arcada dentária inteira, com
        todos os dentes e gengiva, é planejada e fixada de forma segura sobre
        implantes. O resultado é uma prótese que não se move, não machuca e
        funciona como dentes naturais.
        <br style={{ marginBottom: "8px" }} />
        É a solução ideal para quem perdeu todos os dentes e quer se livrar do
        desconforto da dentadura móvel. O tratamento devolve a liberdade para
        mastigar com segurança, a confiança total para sorrir e a qualidade de
        vida que você merece.
        <br style={{ marginBottom: "8px" }} />
        Ficou com alguma dúvida? Estamos à disposição para conversar e
        esclarecer todos os pontos, sem compromisso.
      </>
    ),
  },
];
