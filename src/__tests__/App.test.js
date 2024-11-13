import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article"; // Adjust the import as necessary

test("renders a <p> with the preview text", () => {
  const article = {
    title: "First Post",
    date: "2023-01-01",
    preview: "Setting up the building blocks of your site",
  };

  render(<Article title={article.title} date={article.date} preview={article.preview} />);
  
  const p = screen.getByText(/Setting up the building blocks of your site/i);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});