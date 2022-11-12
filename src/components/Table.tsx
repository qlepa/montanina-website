import LeagueTable from "./LeagueTable";

function Table() {
  return (
    <div className="h-screen flex flex-row bg-slate-700" id='table'>
      <div className="mt-24">
        <iframe src='https://www.tuttocampo.it/WidgetV2/Partita/3cbfbe38-97ea-4902-8165-33f444ed82d9' width='500' height='350' scrolling='no' frameBorder='0'></iframe>
        <iframe src='https://www.tuttocampo.it/WidgetV2/ProssimaPartita/3cbfbe38-97ea-4902-8165-33f444ed82d9' width='500' height='350' scrolling='no' frameBorder='0'></iframe>
      <LeagueTable />
      </div>
    </div>
  );
};

export default Table;