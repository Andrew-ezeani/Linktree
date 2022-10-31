import "../styles/main.css";
import Link from "./link";

function LinksSection() {
  return (
    <div className="link__section">
      <Link
        href="https://twitter.com/Alwaysgreen18"
        id="twit__acct"
        text="Twitter Link"
      />
      <Link href="https://training.zuri.team" id="btn__zuri" text="Zuri Team" />
      <Link href="http://books.zuri.team" id="books" text="Zuri Books" />
      <Link
        href="https://books.zuri.team/python-for-beginners?ref_id=andrew-ezeani"
        id="book__python"
        text="Python Books"
      />
      <Link
        href="https://background.zuri.team"
        id="pitch"
        text="Background Checks or Coders"
      />
      <Link
        href="https://books.zuri.team/design-rules"
        id="book__design"
        text="Design Books"
      />
    </div>
  );
}

export default LinksSection;
