import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DigitalCustodianAgentServiceBase } from "./base/digitalCustodianAgent.service.base";

@Injectable()
export class DigitalCustodianAgentService extends DigitalCustodianAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
