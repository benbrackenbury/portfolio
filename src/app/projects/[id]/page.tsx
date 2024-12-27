type ProjectPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage(props: ProjectPageProps) {
  return (
    (<div className='flex flex-col gap-4'>
      <h1 className='text-3xl'>Project {(await props.params).id}</h1>
      <p className='max-w-prose text-lg opacity-90'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, id
        sint debitis non voluptatibus, adipisci architecto ut laudantium modi
        maiores a? Consectetur, asperiores! A laudantium aperiam neque dolorem
        eligendi?
      </p>
    </div>)
  );
}
