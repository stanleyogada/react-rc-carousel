type CardProps = {
  title?: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
