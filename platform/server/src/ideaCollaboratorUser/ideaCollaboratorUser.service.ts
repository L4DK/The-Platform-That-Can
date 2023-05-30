import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeaCollaboratorUserServiceBase } from "./base/ideaCollaboratorUser.service.base";

@Injectable()
export class IdeaCollaboratorUserService extends IdeaCollaboratorUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
