// pages/game.tsx
import { useRouter } from 'next/router';

const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <main>
      <h1>Welcome to the game, {name}!</h1>
      
      
    </main>
  );
};

export default GamePage;
