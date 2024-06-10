import { Container } from './styles';

const Page = ({ children }) => {
  return (
    <Container>
      <section>{children}</section>
    </Container>
  );
}

export default Page;