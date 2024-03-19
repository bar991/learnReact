import "./EmployeeList.css";

export function EmployeeList(): JSX.Element {
    return (
        <div className="EmployeeList">
			            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
