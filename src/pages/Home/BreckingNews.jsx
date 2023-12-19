import Marquee from "react-fast-marquee";

const BreckingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-2 mt-5">
      <button className="btn bg-[#D72050] hover:bg-[#ff548a] text-white rounded-none">Brecking News</button>
      <Marquee pauseOnHover={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          eius, mollitia nisi labore dicta odit velit ab temporibus tempore
          excepturi ea error, deserunt porro ad aliquid illum amet inventore
          nemo incidunt! Maxime iusto omnis magnam unde dolore at nostrum
          aliquid sit, ut expedita consequuntur cum aut beatae, sequi veritatis!
          Ea nesciunt, dicta nihil laborum atque laudantium tempore maxime ullam
          reprehenderit! Quasi, adipisci aperiam? Accusamus eos qui saepe vel
          necessitatibus numquam odio aliquid voluptates, repellendus nesciunt
          amet iste obcaecati itaque praesentium recusandae, nam maiores minima
          ullam accusantium. A ratione facilis sit? Magnam explicabo amet
          nesciunt, reiciendis officia maxime numquam vero quae.
        </p>
      </Marquee>
    </div>
  );
};

export default BreckingNews;
