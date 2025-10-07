import { render, screen } from "@testing-library/react"
import FetchApi1 from '../app/FetchApi1/page'

describe("testing with global.fetch", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ name: 'aja', role: 'Tester' })
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should display loading first, then fetched data", async () => {
    render(<FetchApi1 />);

    // 1️⃣ Check Loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // 2️⃣ Wait for the fetched data to appear
    const name = await screen.findByText('aja');      // user.name
    const role = await screen.findByText('Tester');   // user.role

    // 3️⃣ Assertions
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
});
