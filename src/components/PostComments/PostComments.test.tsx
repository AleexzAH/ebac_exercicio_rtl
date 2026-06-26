import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";
import userEvent from "@testing-library/user-event";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar 2 cometários", async () => {
    render(<PostComment />);
    const textarea = screen.getByTestId("comment-textarea");
    const button = screen.getByTestId("comment-button");

    await userEvent.type(textarea, "Primeiro comentário");
    await userEvent.click(button);

    await userEvent.type(textarea, "Segundo comentário");
    await userEvent.click(button);

    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
