'use client';

const asciiBeans = `
          ( (
           ) )
        ........
        |      |]
        \\      /
         \`----'
       Hi
`;

export default function BeansPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center p-6">
      <pre className="text-lg md:text-2xl font-mono whitespace-pre-wrap text-center">
        {asciiBeans}
      </pre>
    </div>
  );
}
