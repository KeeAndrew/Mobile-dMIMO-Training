export const Button = ({ children, className = "", ...props }) => (
    <button className={`px-4 py-2 ${className}`} {...props}>
        {children}
    </button>
);

export const Badge = ({ children, className = "", ...props }) => (
    <span className={`inline-flex items-center text-xs px-2 py-1 ${className}`} {...props}>
        {children}
    </span>
);

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h3 className={className}>{children}</h3>
);

export const Progress = ({ value = 0, className = "" }) => (
    <div className={`w-full bg-slate-200 rounded-full h-2 overflow-hidden ${className}`}>
        <div
            className="bg-sky-500 h-full rounded-full transition-all"
            style={{ width: `${value}%` }}
        />
    </div>
);