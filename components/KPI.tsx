export default function KPI({ title, value }: any) {
    return (
        <div className="card">
            <div style={{ color: "#00D4FF", fontSize: 14 }}>{title}</div>
            <div style={{ fontSize: 24, marginTop: 8 }}>
                {value}
            </div>
        </div>
    );
}
