import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiGatekeeperServiceBase } from "./base/aiGatekeeper.service.base";

@Injectable()
export class AiGatekeeperService extends AiGatekeeperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
