import "../styles/main.css";
import Link from "./link";

function LinksSection() {
  return (
    <div className="link__section">
      <Link href="https://twitter.com/Alwaysgreen18" text="Twitter Link" />
      <Link href="https://training.zuri.team" id="btn__zuri" text="Zuri Team" />
      <Link
        href="http://books.zuri.team"
        id="books"
        title="Coding and design books are available"
        text="Zuri Books"
      />
      <Link
        href="https://books.zuri.team/python-for-beginners?ref_id=Andrew-Ezeani"
        id="book__python"
        title="Take your first step in becoming a world class programmer/designer by getting our beginner friendly coding/design books"
        text="Python Books"
      />
      <Link
        href="https://background.zuri.team"
        id="pitch"
        title="Join 200+ tech employers that don't have to worry about a developer's background record, because we do."
        text="Background Checks or Coders"
      />
      <Link
        href="https://books.zuri.team/design-rules"
        id="book__design"
        title="New to design? Get our free design book and start your journey to becoming a world class designer"
        text="Design Books"
      />
    </div>
  );
}

export default LinksSection;
