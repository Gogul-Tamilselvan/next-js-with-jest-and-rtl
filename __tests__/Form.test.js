import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInsert from '../app/FormInsert/page'

describe("testing submit form",()=>{
    const user = userEvent.setup();
    const mockfn = jest.fn();   

    it("testing form submit functionality",async()=>{
        render(<FormInsert submitfn={mockfn} />)
        const name = screen.getByPlaceholderText(/enter name/i);
        const password = screen.getByPlaceholderText(/enter a password/i);
        await user.type(name,"gogul");
        await user.type(password,"12345678");
        const btn = screen.getByText('Submit')
        await user.click(btn)

        expect(mockfn).toHaveBeenCalledTimes(1);
        expect(mockfn).toHaveBeenCalledWith({name:"gogul",password:"12345678"})
    });


    it("testing submit btn after clicking that",async()=>{
        render(<FormInsert submitfn={mockfn}/>);
        const beforeloadingState = screen.getByText(/submit/i);
        expect(beforeloadingState).toBeInTheDocument();
        await user.click(screen.getByRole("button",{name:/submit/i}));
        const loadingState = screen.getByText(/submitting the data.../i);
        expect(loadingState).toBeInTheDocument();
    });
});