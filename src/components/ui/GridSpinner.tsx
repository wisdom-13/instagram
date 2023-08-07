import dynamic from "next/dynamic";

const GridLoader = dynamic(
  () => import('react-spinners').then(lib => lib.GridLoader),
  {
    ssr: false,
  }
)

type Props = {
  color?: string;
}

export default function GridSpinner({ color = 'rgb(37 99 235)' }: Props) {
  return <GridLoader color={color} />;
}

