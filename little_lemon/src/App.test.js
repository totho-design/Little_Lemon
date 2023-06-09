import { fireEvent, render, screen } from "@testing-library/react";
import Bookingform from "./components/booking/Bookingform";

describe("Booking form", () => {
    test("User is able to reserve a table by filling the form", () => {
      const firstName = "John";
      const LastName = "Doe";
      const email = "example@example.com"
      const phone = "+00111234567"
      const guest = "2"
      const role = "engagement"

      const handleSubmit = jest.fn();
      render(<Bookingform onSubmit={handleSubmit} />);

      const textArea = screen.getByLabelText(/First Name/);
      fireEvent.change(textArea, { target: { value: firstName } });

      const textArea = screen.getByLabelText(/Last Name/);
      fireEvent.change(textArea, { target: { value: lastName } });

      const textArea = screen.getByLabelText(/Email Address/);
      fireEvent.change(textArea, { target: { value: email } });

      const textArea = screen.getByLabelText(/Phone Number/);
      fireEvent.change(textArea, { target: { value: phone } });

      const rangeInput = screen.getByLabelText(/Guest:/);
      fireEvent.change(rangeInput, { target: { value: guest } });


      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);

      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        guest,
      });
    });


test("User is able to reserve a table by filling the form", () => {
        const firstName = "John";
        const LastName = "Doe";
        const email = "example@example.com"
        const phone = "+00111234567"
        const guest = "2"
        const role = "engagement"

        const handleSubmit = jest.fn();
        render(<Bookingform onSubmit={handleSubmit} />);

        const textArea = screen.getByLabelText(/First Name/);
        fireEvent.change(textArea, { target: { value: firstName } });

        const textArea = screen.getByLabelText(/Last Name/);
        fireEvent.change(textArea, { target: { value: lastName } });

        const textArea = screen.getByLabelText(/Email Address/);
        fireEvent.change(textArea, { target: { value: email } });

        const textArea = screen.getByLabelText(/Phone Number/);
        fireEvent.change(textArea, { target: { value: phone } });

        const rangeInput = screen.getByLabelText(/Guest:/);
        fireEvent.change(rangeInput, { target: { value: guest } });


        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          guest,
        });