export const projects=[
{name:'circuit-simulator',title:'Circuit Simulator',group:'Applications',description:'Visual browser-based DC circuit design and live analysis.',status:'stable',live:'https://opencircuitlabs.github.io/circuit-simulator/'},
{name:'learn-circuits',title:'Learn Circuits',group:'Education',description:'Interactive, progress-aware electronics curriculum.',status:'new',live:'https://opencircuitlabs.github.io/learn-circuits/'},
{name:'virtual-breadboard',title:'Virtual Breadboard',group:'Applications',description:'Build physical-style circuits and analyze them in the browser.',status:'new',live:'https://opencircuitlabs.github.io/virtual-breadboard/'},
{name:'waveform-viewer',title:'Waveform Viewer',group:'Applications',description:'Inspect, measure and export transient voltage and current traces.',status:'new',live:'https://opencircuitlabs.github.io/waveform-viewer/'},
{name:'circuit-examples',title:'Circuit Examples',group:'Education',description:'Curated and tested circuits for learners and tool builders.',status:'new',live:'https://opencircuitlabs.github.io/circuit-examples/'},
{name:'kernel',title:'Simulation Kernel',group:'Foundation',description:'Typed DC modified-nodal-analysis engine for Node and browsers.',status:'private'},
{name:'transient-engine',title:'Transient Engine',group:'Foundation',description:'RC, RL and source waveform time-domain simulation.',status:'new'},
{name:'circuit-format',title:'Circuit Format',group:'Foundation',description:'Portable, versioned JSON specification and validation tools.',status:'stable'},
{name:'spice-parser',title:'SPICE Parser',group:'Developer tools',description:'Parse, serialize and convert common SPICE netlists.',status:'new'},
{name:'circuit-cli',title:'Circuit CLI',group:'Developer tools',description:'Validate, inspect, convert and simulate from the terminal.',status:'new'},
{name:'component-models',title:'Component Models',group:'Data',description:'Curated machine-readable electronic component models.',status:'new'},
{name:'organization-site',title:'Organization Site',group:'Community',description:'The public directory and roadmap for the OpenCircuit ecosystem.',status:'new'}
];
export const principles=[{title:'Open by default',text:'Permissively licensed code, documented formats and reproducible examples.'},{title:'Useful for learning',text:'Clear interfaces and explanations without hiding the engineering underneath.'},{title:'Built as an ecosystem',text:'Shared formats and focused packages instead of isolated demonstrations.'},{title:'Verified releases',text:'Tests and CI are required before projects enter the public directory.'}];
export function filterProjects(query='',group='All'){const q=query.toLowerCase().trim();return projects.filter(p=>(group==='All'||p.group===group)&&(!q||`${p.name} ${p.title} ${p.description}`.toLowerCase().includes(q)));}
export function repositoryUrl(name){return`https://github.com/opencircuitlabs/${name}`;}
