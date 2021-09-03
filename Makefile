.PHONY: build auth deploy init

build:
	graph codegen && graph build

auth:
	graph auth --studio

deploy:
	graph deploy --studio ether-freakers

init:
	graph init \
	 --contract-name EtherFreakers \
	 --index-events \
	 --product subgraph-studio \
	 --from-contract 0x3a275655586a049fe860be867d10cdae2ffc0f33
