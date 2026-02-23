#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import json

DATA = {
    'chrome': ['24d59cb3-1863-49d6-8dc2-c298ad1bde43', 'fa25ef5c-3651-41f2-9e77-9551f380034f'],
}

GMT_URL='http://api.green-coding.internal:9142'
COMPARE_URL=f"{GMT_URL}/v1/compare?ids="

def get_values(unit, ounit, data):
    data = next(iter(data.values()))

    if data["mean"] == 0:
        return f"0.00{unit} ± 0.00%"

    if unit == 'us' and ounit == 's':
        mean_millions = data["mean"] / 1_000_000
        unit = 's'
    elif unit == 'ms' and ounit == 's':
        mean_millions = data["mean"] / 1_000
        unit = 's'

    elif unit == 'Bytes' and ounit == 'MB':
        mean_millions = data["mean"] / 1_000_000
        unit = 'MB'
    elif unit == 'uJ' and ounit == 'J':
        mean_millions = data["mean"] / 1_000_000
        unit = 'J'
    else:
        mean_millions = data["mean"]
        unit = unit

    rel_std_pct   = data["stddev"] / data["mean"] * 100

    return f"{mean_millions:.2f}{unit} ± {rel_std_pct:.2f}%"


def get_phase(data):
    return {
        'Machine Energy': get_values(data['psu_energy_dc_rapl_msr_machine']['unit'], 'J', data['psu_energy_dc_rapl_msr_machine']['data']['PSYS_0']['data']),
        'SCI': get_values(data['psu_carbon_dc_rapl_msr_machine']['unit'], 'g', data['psu_carbon_dc_rapl_msr_machine']['data']['PSYS_0']['data']),
        'Max Memory': get_values(data['memory_used_cgroup_container']['unit'], 'MB', data['memory_used_cgroup_container']['data']['bench-service']['data']),
        'Duration': get_values(data['phase_time_syscall_system']['unit'], 's', data['phase_time_syscall_system']['data']['[SYSTEM]']['data']),
        'Disk Data': get_values(data['disk_total_cgroup_container']['unit'], 'MB', data['disk_total_cgroup_container']['data']['bench-service']['data']),
        'Network traffic': get_values(data['network_total_cgroup_container']['unit'], 'MB', data['network_total_cgroup_container']['data']['bench-service']['data']),
#        'Carbon': get_values(data['psu_carbon_dc_rapl_msr_machine']['unit'], 'g', data['psu_carbon_dc_rapl_msr_machine']['data']['PSYS_0']['data']),
    }

def get_data(data):

    return {
        'INSTALL': get_phase(data['data']['data']['install']),
        'IDLE': get_phase(data['data']['data']['idle']),
        'RUN': get_phase(data['data']['data']['run']),
        'UNINSTALL': get_phase(data['data']['data']['uninstall']),
    }

def main():
    ret_data = {}
    for key, values in DATA.items():
        url_str = f"{COMPARE_URL}{','.join(values)}"
        print(f"Fetching data from: {url_str}")
        # Uncomment the next line to see the full URL
        # print(f"Fetching data from: {url_str}")
        r = requests.get(url_str, headers={'Accept': 'application/json', 'Content-Type': 'application/json'})
        if r.status_code == 200:
            ret_data[key] = get_data(r.json())
        else:
            print(f"Error: {r.status_code} - {r.text}")

    print(json.dumps(ret_data, indent=4))

if __name__ == "__main__":
    main()