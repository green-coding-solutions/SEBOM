This repository contains the usage scenarios that are used together with the
[Green Metrics Tool](https://www.green-coding.io/products/green-metrics-tool) to
create energy benchmarks of software.

## Name

SEBOM means Software Energy Bill of Materials.

It is a spin on the classic Bill of Materials which includes also energy data.

## Database

All data is public and MIT licensed.

Sometime early 2025 when the measured projects have reached a sufficient amount we will release
a fronted for the SEBOM data we measured.

This SEBOM Database will allow:
- Filtering by software category
- Filtering by software version
- Understanding which software in a category has the lowest energy consumption and carbon emissions

This allows developer to make informed architectural choices to create the lowest carbon emitting software for 
their use case.

## Comparison with classical SBOM

A typicall bill of materials is already created by the Green Metrics Tool with every run. 
The internal wording for this is *Container Dependencies*.

The resulting data in the SEBOM database will thus contain energy data as well as software dependencies.

Output of the Green Metrics is very similar in completeness to popular tools like [Syft](https://github.com/anchore/syft),
however not compatible in data structure.

One of the main reasons is that the SBOM data is derived on container runtime and not for the static image.

The SEBOM can thus be seen as a super-set to an SBOM.


## Credit / Funding

This work is funded by the Deutsche Bundesstiftung Umwelt (DBU) under the number [DBU Project 39703/01](https://www.dbu.de/projektdatenbank/39703-01/)

Project details are to be found on the [project page](https://greencoding.f2.htw-berlin.de/projekte/caso-entwicklung-von-technologien-zur-co2-und-energieeinsparung-bei-der-softwareentwicklung/)

![DBU Logo](https://www.dbu.de/app/uploads/jpg-DBU-Logosponsored-by-RGB.jpg)

We are super grateful for this funding and are blessed to have been granted the opportunity to create this data repository for the greater
software community!
