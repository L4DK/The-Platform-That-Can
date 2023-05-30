import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChaosSculptorUserServiceBase } from "./base/chaosSculptorUser.service.base";

@Injectable()
export class ChaosSculptorUserService extends ChaosSculptorUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
