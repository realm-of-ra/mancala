import { render } from "@testing-library/react";
import Pit from '../../src/components/pit';

describe('pit', () => {
    it('should render no seeds in pit ', () => {
        const { queryByTestId } = render(<Pit amount={0} address={""} pit={0} winner={""} game_id={""} status={""} message={() => {
            //
        }} userAccount={undefined} system={undefined} />)
        expect(queryByTestId('seeds')).not.toBeInTheDocument();
    })
    it('should render seeds in pit ', () => {
        const { queryByTestId } = render(<Pit amount={4} address={""} pit={0} winner={""} game_id={""} status={""} message={() => {
            //
        }} userAccount={undefined} system={undefined} />)
        expect(queryByTestId('seeds')).toBeInTheDocument();
    })
})