import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color={p => p.theme.color.gray}
    ariaLabel="three-dots-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClassName=""
    visible={true}
  />
);
