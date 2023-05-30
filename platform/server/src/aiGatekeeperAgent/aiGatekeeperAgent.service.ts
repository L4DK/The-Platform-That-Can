import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiGatekeeperAgentServiceBase } from "./base/aiGatekeeperAgent.service.base";

@Injectable()
export class AiGatekeeperAgentService extends AiGatekeeperAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
