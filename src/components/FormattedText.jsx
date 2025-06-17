import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})
const components = {
  h1: (props) => <h1 className="!text-4xl !font-bold !text-black !mt-8 !mb-4" {...props} />,
  h2: (props) => <h2 className="!text-2xl !font-semibold !text-black !mt-6 !mb-3" {...props} />,
  h3: (props) => <h3 className="!text-xl !font-semibold !text-black !mt-5 !mb-3" {...props} />,
  h4: (props) => <h4 className="!text-lg !font-semibold !text-black !mt-4 !mb-2" {...props} />,
  h5: (props) => <h5 className="!text-lg !font-medium !text-black !mt-3 !mb-2" {...props} />,
  h6: (props) => <h6 className="!text-base !font-medium !text-black !mt-2 !mb-1" {...props} />,
  p: (props) => <p className="!text-gray-800 !leading-relaxed !mb-4" {...props} />,
  ul: (props) => <ul className="!list-disc !list-outside !pl-5 !mb-4" {...props} />,
  ol: (props) => (
  <ol className="!list-decimal !list-outside !pl-5 !mb-4" {...props} />
),

  li: (props) => <li className="!mb-1" {...props} />,
  blockquote: (props) => (
    <blockquote className="!border-l-4 !border-gray-300 !pl-4 !italic !text-gray-600 !my-4" {...props} />
  ),
  a: (props) => (
    <a className="!text-blue-600 !underline !hover:text-blue-800" target="_blank" rel="noopener noreferrer" {...props} />
  ),

  pre: ({ node, children, ...props }) => {
  return (
    <pre
      className="!bg-gray-800 !text-white !text-sm p-4 rounded-md overflow-x-auto mb-6 max-w-full break-words whitespace-pre-wrap"
      {...props}
    >
      {children}
    </pre>
  );
},


  code: ({ node, inline, className, children, ...props }) => {
    const parentType = node?.parent?.type;

    // Inline <code> inside <pre>
    if (parentType === "paragraph" && node?.parent?.children?.length === 1 && node?.parent?.children[0] === node && node?.position?.start?.offset !== undefined) {
      return (
        <code className="!bg-gray-400 !text-gray-800 !px-1 !py-0.5 !rounded !text-sm !font-mono" {...props}>
          {children}
        </code>
      );
    }

    // Inline <code> inside <strong>
    if (node?.parent?.type === "strong") {
      return (
        <code className="!bg-gray-100 !text-pink-600 !px-1 !py-0.5 !rounded !text-sm !font-mono" {...props}>
          {children}
        </code>
      );
    }

    // Regular inline code
    if (inline) {
      return (
        <code className="!bg-gray-100 !text-gray-800 !px-1 !py-0.5 !rounded !text-sm !font-mono" {...props}>
          {children}
        </code>
      );
    }

    // Code inside <pre> is handled by <pre> renderer, so just render mono style here
    return (
      <code className="!font-mono" {...props}>
        {children}
      </code>
    );
  },
};

const FormattedText = ({ markdown }) => {
  return (
    <div className={`mb-20 max-w-5xl w-full mx-auto markdown-content overflow-hidden ${poppins.className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default FormattedText;