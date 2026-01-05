// Please do not change these constants. They should set by the install script
API_URL = "http://api.green-coding.internal:9142"
METRICS_URL = "http://metrics.green-coding.internal:9142"

ACTIVATE_SCENARIO_RUNNER = true;
ACTIVATE_ECO_CI = true;
ACTIVATE_CARBON_DB = false;
ACTIVATE_POWER_HOG = false;
ACTIVATE_AI_OPTIMISATIONS = false;


/*
    The following are configurations to customize de Detailed Metrics / Compare view according to your needs.
    The components are fixed, but you can rename then and include different metrics if needed
*/


// title and filter function for the top left most chart in the Detailed Metrics / Compare view
const TOTAL_CHART_BOTTOM_TITLE = 'Total Energy Consumption';
const TOTAL_CHART_BOTTOM_LABEL = 'Machine Energy';
// function must return boolean
const total_chart_bottom_condition = (metric) => {
    return metric.indexOf('_energy_') !== -1 && metric.endsWith('_machine');
}

// title and filter function for the top left most chart in the Detailed Metrics / Compare view
const TOP_BAR_CHART_TITLE = 'Energy Metrics';
const top_bar_chart_condition = (metric) => {
    return metric.indexOf('_energy_') !== -1 && (metric.endsWith('_machine') || metric.endsWith('_component'));
}

// title and filter function for the top right radar chart in the Detailed Metrics / Compare view
const RADAR_CHART_TITLE = 'General Metrics';
const radar_chart_condition = (metric) => {
    return metric.indexOf('cpu_frequency_sysfs_core') == -1 && metric.indexOf('temperature') == -1  && metric.indexOf('energy') == -1 && metric.indexOf('throttling') == -1 && metric.indexOf('power') == -1 && metric.indexOf('carbon') == -1;
}

// filter function for the CO₂ calculations in the Detailed Metrics
// please note that this metric must be unique per phase
const phase_time_metric_condition = (metric) => {
    return metric == 'phase_time_syscall_system';
}

const psu_machine_carbon_metric_condition = (metric) => {
    return metric.startsWith('psu_carbon_') && metric.endsWith('_machine');
}

const psu_machine_energy_metric_condition = (metric) => {
    return metric.startsWith('psu_energy_') && metric.endsWith('_machine');
}

const psu_machine_power_metric_condition = (metric) => {
    return metric.startsWith('psu_power_') && metric.endsWith('_machine');
}

const cpu_carbon_metric_condition = (metric) => {
    return metric.startsWith('cpu_carbon_') && metric.endsWith('_component');
}

const cpu_energy_metric_condition = (metric) => {
    return metric.startsWith('cpu_energy_') && metric.endsWith('_component');
}

const cpu_power_metric_condition = (metric) => {
    return metric.startsWith('cpu_power_') && metric.endsWith('_component');
}

const disk_carbon_metric_condition = (metric) => {
    return metric.startsWith('disk_carbon_') && metric.endsWith('_component');
}

const disk_energy_metric_condition = (metric) => {
    return metric.startsWith('disk_energy_') && metric.endsWith('_component');
}

const disk_power_metric_condition = (metric) => {
    return metric.startsWith('disk_power_') && metric.endsWith('_component');
}

const dram_carbon_metric_condition = (metric) => {
    return metric.startsWith('memory_carbon_') && metric.endsWith('_component');
}

const dram_energy_metric_condition = (metric) => {
    return metric.startsWith('memory_energy_') && metric.endsWith('_component');
}

const dram_power_metric_condition = (metric) => {
    return metric.startsWith('memory_power_') && metric.endsWith('_component');
}

const gpu_carbon_metric_condition = (metric) => {
    return metric.startsWith('gpu_carbon_') && metric.endsWith('_component');
}

const gpu_energy_metric_condition = (metric) => {
    return metric.startsWith('gpu_energy_') && metric.endsWith('_component');
}

