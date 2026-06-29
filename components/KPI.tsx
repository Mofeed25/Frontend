export default function KPI({ title, value }: any) {

    return (
        <div className="card">

            <h3 className="text-gray-300">{title}</h3>

            <p className="text-xl text-[#00D4FF] mt-2">
                {value}
            </p>

        </div>
    );
}
