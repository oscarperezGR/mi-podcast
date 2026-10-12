import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mi Podcast: un programa sobre el trabajo creativo, la atención y las ideas, presentado por Oscar. Para todos los de mente creativa.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero" aria-labelledby="about-title">
        <p className="eyebrow">Acerca del programa</p>
        <h1 id="about-title">Mi podcast</h1>
        <p className="hero__lede muted">
          Un programa sobre el trabajo creativo, la atención y las ideas.
        </p>
      </section>

      <section
        id="about-show"
        className="card page-section"
        aria-labelledby="about-show-heading"
      >
        <h2 id="about-show-heading">De qué va</h2>
        <p>
          Mi podcast es una conversación sobre el trabajo creativo, la atención
          que merece y las ideas que aparecen cuando damos espacio a ambas. Cada
          episodio es una charla independiente: sin prisa, sin fórmulas y con
          tiempo para pensar en cómo creamos lo que creamos.
        </p>
        <p className="muted">Es para todos los de mente creativa.</p>
      </section>

      <section
        id="about-host"
        className="card page-section"
        aria-labelledby="about-host-heading"
      >
        <h2 id="about-host-heading">Quién lo presenta</h2>
        <p>
          El programa lo lleva <strong>Oscar</strong>. Llevo 5 años trabajando
          en soporte TI junior y como desarrollador FullStack, y de ese trayecto
          nace esta mezcla de lo técnico y lo creativo: entender cómo funcionan
          las cosas para poder inventar con ellas.
        </p>
        <p className="muted">
          Cuando no estoy depurando código o apagando fuegos de soporte, estoy
          tomando notas sobre atención, ideas y el oficio de hacer cosas.
        </p>
      </section>

      <section
        id="about-contact"
        className="card page-section"
        aria-labelledby="about-contact-heading"
      >
        <h2 id="about-contact-heading">Contacto y seguimiento</h2>
        <p>
          ¿Tienes una idea, una pregunta o simplemente quieres saludar?
          Escríbenos y te respondemos.
        </p>
        <ul className="page-list">
          <li>
            <a href="mailto:hola@mipodcast.example">hola@mipodcast.example</a> —
            escríbenos directamente.
          </li>
          <li>
            <Link href="/episodes">Escucha los episodios</Link> — sigue el
            programa desde el catálogo completo.
          </li>
          <li>
            <Link href="/faq">Preguntas frecuentes</Link> — cómo suscribirte y
            qué esperar del programa.
          </li>
        </ul>
      </section>
    </>
  );
}
