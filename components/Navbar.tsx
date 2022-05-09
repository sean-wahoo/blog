import styles from "styles/components/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Posts</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
