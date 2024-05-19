export default function Template({children} 
    : {children: React.ReactNode}
){
    return (
        <div>
            <h1>From root Template</h1>
            {children}
        </div>
    );
}