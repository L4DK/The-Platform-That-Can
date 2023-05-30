import { Module } from "@nestjs/common";
import { DigitalCustodianAgentModuleBase } from "./base/digitalCustodianAgent.module.base";
import { DigitalCustodianAgentService } from "./digitalCustodianAgent.service";
import { DigitalCustodianAgentController } from "./digitalCustodianAgent.controller";
import { DigitalCustodianAgentResolver } from "./digitalCustodianAgent.resolver";

@Module({
  imports: [DigitalCustodianAgentModuleBase],
  controllers: [DigitalCustodianAgentController],
  providers: [DigitalCustodianAgentService, DigitalCustodianAgentResolver],
  exports: [DigitalCustodianAgentService],
})
export class DigitalCustodianAgentModule {}
