import { render,screen } from '@testing-library/react';
import FetchApi from '../app/FetchApi/page'
import userEvent from '@testing-library/user-event';

describe("testing api fu nctionality with jest",()=>{
const user = userEvent.setup();
const mockfn = jest.fn().mockResolvedValue("gogul");

it("gonna test fetch by useEffect",async()=>{
        render(<FetchApi fetchUser={mockfn} />);
        const loading = await screen.findByText('Loading...');
        expect(loading).toBeInTheDocument();
        expect(await screen.findByText(/gogul/i)).toBeInTheDocument();


})



})