import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";

export default async function Home() {
  const navItems = [
    { name: "Home", link: "" },
    { name: "Get Involved", link: "" },
    { name: "Donate", link: "" },
    { name: "Impact Areas", link: "" },
    { name: "Success Stories", link: "" },
  ];

  return (
    <div className={styles.page}>
      <Navbar navItems={navItems} />
      <section>
        <Hero/>
      </section>
    </div>
  );
}
