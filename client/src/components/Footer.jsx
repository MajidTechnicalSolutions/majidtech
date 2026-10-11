// The footer under each page. The year is the year the site was built.
export default function Footer() {
  return (
    <footer className="w-full">
      <small>© {new Date().getFullYear()} Majid Technical Solutions. All rights reserved.</small>
    </footer>
  );
}
